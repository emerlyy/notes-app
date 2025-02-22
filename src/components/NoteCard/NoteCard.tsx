import { ButtonHTMLAttributes } from "react";
import { Note } from "../../types";
import { formatDate } from "../../utils/formatDate";
import Badge from "../ui/Badge/Badge";
import Card from "../ui/Card/Card";
import List from "../ui/List/List";
import Text from "../ui/Text/Text";
import Title from "../ui/Title/Title";
import "./NoteCard.css";

type Props = { isActive?: boolean } & Pick<
  Note,
  "title" | "tags" | "lastEdited"
> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const NoteCard = ({ title, tags, lastEdited, isActive, ...props }: Props) => {
  return (
    <Card
      variant="regular"
      className={"note-card"}
      isActive={isActive}
      {...props}
    >
      <Title tag="h3" size="small" weight="semibold">
        {title}
      </Title>
      {tags && (
        <List direction="row" gap={4} tag="ul" wrap="wrap">
          {tags.map((item) => (
            <li key={item}>
              <Badge label={item} />
            </li>
          ))}
        </List>
      )}
      <Text size="small">{formatDate(lastEdited)}</Text>
    </Card>
  );
};

export default NoteCard;
