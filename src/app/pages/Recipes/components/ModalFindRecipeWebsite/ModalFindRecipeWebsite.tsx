import React, { useCallback, useState } from 'react';
import Input from '@/components/Input';
import Text from '@/components/Text';
import s from './ModalFindRecipeWebsite.module.scss';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Meta } from '@/types/shared';
import { useRecipesStore } from '../../useRecipesStore';

type ModalFindRecipesProps = {
  onClose: () => void;
};
const ModalFilterRecipes: React.FC<ModalFindRecipesProps> = observer(({ onClose }) => {
  const recipeStore = useRecipesStore();
  const [url, setUrl] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (url) {
        await recipeStore.getExtractRecipe(url);
        navigate(`/recipes/-1`);
        setUrl('');
      }
      onClose();
    },
    [url, recipeStore, navigate, onClose],
  );

  const handleCancel = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onClose();
    },
    [onClose],
  );

  return (
    <form onSubmit={handleSubmit} className={s.root}>
      <div>
        <Text view="label">Url</Text>
        <Input value={url} onChange={setUrl} color="primary" placeholder="Enter url" />
      </div>
      <div className={s.root__footer}>
        <Button loading={recipeStore.metaState.extractRecipe === Meta.loading} className={s.root__btn} type="submit">
          Submit
        </Button>
        <Button className={s.root__btn} fill onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
});

export default ModalFilterRecipes;
