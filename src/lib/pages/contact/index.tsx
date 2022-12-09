import CardNewLetter from "lib/components/Card/CardSubFooter";
import CardPageTitle from "lib/components/Card/CardSubHeader";
import TfContact from "lib/components/Card/Contact/TfContact";
import MapMessage from "lib/components/Card/Contact/MapMessage";

const Contact: React.FC = () => {
  return (
    <>
      <CardPageTitle title="contact" />

      <TfContact />

      <MapMessage />

      <CardNewLetter />
    </>
  );
};

export default Contact;
