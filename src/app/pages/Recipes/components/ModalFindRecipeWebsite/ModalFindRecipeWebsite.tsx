import React, { memo, useCallback, useMemo, useState } from 'react';
import Input from '@/components/Input';
import Text from '@/components/Text';
import s from './ModalFindRecipeWebsite.module.scss';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Meta } from '@/types/shared';
import RecipeStore from '@/stores/RecipeStore';

type ModalFindRecipesProps = {
  onClose: () => void;
};
const ModalFilterRecipes: React.FC<ModalFindRecipesProps> = observer(({ onClose }) => {
  const { recipe, getExtractRecipe, metaState } = RecipeStore;
  const [url, setUrl] = useState<string>('');
  const navigate = useNavigate();
  const regex = useMemo(() => /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(:\d+)?(\/[^\s]*)?$/, []);

  const recipeId = recipe ? recipe.id : null;

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (regex.test(url) || url === '') {
        await getExtractRecipe(url);
        navigate(`/recipes/${recipeId}`);
        setUrl('');
        onClose();
      }
    },
    [regex, url, getExtractRecipe, navigate, recipeId, onClose],
  );

  return (
    <form onSubmit={handleSubmit} className={s.root}>
      <div>
        <Text view="label">Url</Text>
        <Input value={url} onChange={setUrl} color="primary" placeholder="Enter url" />
      </div>
      <div className={s.root__footer}>
        <Button loading={metaState.extractRecipe === Meta.loading} className={s.root__btn} type="submit">
          Submit
        </Button>
        <Button className={s.root__btn} fill onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
});

export default memo(ModalFilterRecipes);
