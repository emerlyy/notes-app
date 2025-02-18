import clsx from "clsx";
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
      className={clsx("note-card", {
        "note-card_active": isActive,
      })}
      {...props}
    >
      <Title tag="h3" size="small">
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
