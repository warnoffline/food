import Text from '@/components/Text';
import styles from './RecipeSummary.module.scss';

const RecipeSummary: React.FC<{ summary: string }> = ({ summary }) => {
  return (
    <div className={styles['recipe-summary']}>
      <Text isHtml tag="p">
        {summary}
      </Text>
    </div>
  );
};

export default RecipeSummary;
