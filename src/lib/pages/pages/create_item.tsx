import CardNewLetter from "lib/components/Card/CardSubFooter";
import CardPageTitle from "lib/components/Card/CardSubHeader";
import CreateItemForm from "lib/components/Card/CreateItem/FormCreateItem";
import TopSeller from "lib/components/Card/CreateItem/TopSeller";

const CreateItem: React.FC = () => {
  return (
    <>
      <CardPageTitle title="createItem" />

      <TopSeller />

      <CreateItemForm />

      <CardNewLetter />
    </>
  );
};

export default CreateItem;
