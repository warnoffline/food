import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { auth, db } from '@/configs/configureFirebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, deleteDoc, updateDoc, arrayRemove } from 'firebase/firestore';

type PrivateFields = '_loading' | '_error' | '_user' | '_isAuthenticated';

class UserStore {
  private _user: string = '';
  private _loading: boolean = false;
  private _error: string | null = null;
  private _isAuthenticated: boolean = false;

  constructor() {
    makeObservable<UserStore, PrivateFields>(this, {
      _isAuthenticated: observable,
      _user: observable,
      _error: observable,
      _loading: observable,
      isAuthenticated: computed,
      error: computed,
      user: computed,
      loading: computed,
      setError: action,
      signUp: action,
      saveFavorites: action,
      deleteFavorites: action,
      deleteFavoriteById: action,
      getFavorites: action,
      login: action,
      logout: action,
    });
    this.loadFromLocalStorage();
  }

  get error() {
    return this._error;
  }

  get user() {
    return this._user;
  }

  get loading() {
    return this._loading;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  setError(msg: string) {
    this._error = msg;
  }

  async saveFavorites(favorites: number[]): Promise<void> {
    this._loading = true;
    this._error = null;
    try {
      if (!this._user) throw new Error('User is not logged in.');
      const userDocRef = doc(db, 'users', this._user);

      await setDoc(userDocRef, { favorites }, { merge: true });
    } catch (err) {
      console.error('Error saving numbers:', err);
      this._error = 'Failed to save numbers.';
    } finally {
      this._loading = false;
    }
  }

  async getFavorites(): Promise<number[]> {
    this._loading = true;
    this._error = null;
    try {
      if (!this._user) throw new Error('User is not logged in.');
      const userDocRef = doc(db, 'users', this._user);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return data.favorites || [];
      } else {
        console.log('No such document.');
        return [];
      }
    } catch (err) {
      console.error('Error fetching numbers:', err);
      this._error = 'Failed to fetch numbers.';
      return [];
    } finally {
      this._loading = false;
    }
  }

  async deleteFavorites(): Promise<void> {
    this._loading = true;
    this._error = null;
    try {
      if (!this._user) throw new Error('User is not logged in.');
      const userDocRef = doc(db, 'users', this._user);

      await deleteDoc(userDocRef);
    } catch (err) {
      console.error('Error deleting numbers:', err);
      this._error = 'Failed to delete numbers.';
    } finally {
      this._loading = false;
    }
  }

  async deleteFavoriteById(favoriteId: number): Promise<void> {
    this._loading = true;
    this._error = null;
    try {
      if (!this._user) throw new Error('User is not logged in.');
      const userDocRef = doc(db, 'users', this._user);

      await updateDoc(userDocRef, {
        favorites: arrayRemove(favoriteId),
      });
    } catch (err) {
      console.error('Error deleting number:', err);
      this._error = 'Failed to delete number.';
    } finally {
      this._loading = false;
    }
  }

  async signUp(email: string, password: string): Promise<void> {
    this._loading = true;
    this._error = null;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      runInAction(() => {
        this._isAuthenticated = true;
        this._user = email;
      });
      this.saveToLocalStorage();
    } catch (err) {
      if (err instanceof Error) {
        this.handleFirebaseError(err);
      }
    } finally {
      this._loading = false;
    }
  }

  async login(email: string, password: string): Promise<void> {
    this._loading = true;
    this._error = null;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      runInAction(() => {
        this._isAuthenticated = true;
        this._user = email;
      });
      this.saveToLocalStorage();
    } catch (err) {
      if (err instanceof Error) {
        this.handleFirebaseError(err);
      }
    } finally {
      this._loading = false;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(auth);
      runInAction(() => {
        this._isAuthenticated = false;
        this._user = '';
      });
      this.removeFromLocalStorage();
    } catch (err) {
      if (err instanceof Error) {
        this._error = `Logout failed: ${(err as Error).message}`;
      }
    }
  }

  private handleFirebaseError(err: Error): void {
    const errorMessage = err.message;

    if (errorMessage.includes('auth/invalid-credential')) {
      this._error =
        'The provided credentials are invalid. Please check your login details or try using a different login method.';
    } else if (errorMessage.includes('auth/email-already-in-use')) {
      this._error = 'This email is already in use. Please use a different email.';
    } else if (errorMessage.includes('auth/invalid-email')) {
      this._error = 'The email address is not valid. Please check your email.';
    } else if (errorMessage.includes('auth/wrong-password')) {
      this._error = 'Incorrect password. Please try again.';
    } else if (errorMessage.includes('auth/user-not-found')) {
      this._error = 'No user found with this email address.';
    } else if (errorMessage.includes('auth/weak-password')) {
      this._error = 'Password is too weak. Please use a stronger password.';
    } else if (errorMessage.includes('auth/missing-email')) {
      this._error = 'Email is required.';
    } else {
      this._error = `An unknown error occurred: ${errorMessage}`;
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('user', this._user);
  }

  private loadFromLocalStorage(): void {
    const savedData = localStorage.getItem('user');
    if (savedData) {
      this._user = savedData;
      this._isAuthenticated = true;
    }
  }

  private removeFromLocalStorage(): void {
    localStorage.removeItem('user');
  }
}

export default UserStore;
