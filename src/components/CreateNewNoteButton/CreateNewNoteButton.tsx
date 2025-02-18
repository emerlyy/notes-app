import { useNotes } from "@/store/useNotes";
import Button from "../ui/Button/Button";
import { IconPlus } from "../ui/icons";

const CreateNewNoteButton = () => {
  const setCreateMode = useNotes((state) => state.setCreateMode);

  const activateCreateMode = () => setCreateMode(true);

  return (
    <Button variant="default" color="primary" onClick={activateCreateMode}>
      <IconPlus />
      Create New Note
    </Button>
  );
};

export default CreateNewNoteButton;
