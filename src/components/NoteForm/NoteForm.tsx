import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../ui/Button/Button";
import { IconClock, IconStatus, IconTag } from "../ui/icons";
import NotePageLayout from "../ui/NotePageLayout/NotePageLayout";
import Text from "../ui/Text/Text";

import { Note } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { useEffect } from "react";
import "./NoteForm.css";

type FormInputs = {
  title: string;
  tags: string;
  content: string;
};

export type NoteFormSubmitHandler = SubmitHandler<FormInputs>;

type Props = {
  onSubmit: NoteFormSubmitHandler;
  lastEdited: Note["lastEdited"] | null;
} & Pick<Note, "title" | "tags" | "content" | "isArchived">;

const NoteForm = ({
  title,
  tags,
  content,
  isArchived,
  lastEdited,
  onSubmit,
}: Props) => {
  const tagsStr = tags ? tags.join(", ") : "";
  const lastEditedStr = lastEdited ? formatDate(lastEdited) : "Not yet saved";

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      title: title,
      tags: tagsStr,
      content: content,
    },
  });

  useEffect(() => {
    reset({ title: title, tags: tagsStr, content: content });
  }, [reset, title, tags, content, tagsStr]);

  return (
    <NotePageLayout
      header={
        <>
          <input
            className="note-form__input title title_large weight_bold"
            placeholder="Enter a title..."
            {...register("title", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            autoComplete="off"
          />
          <Meta icon={<IconTag width={18} height={18} />} label="Tags">
            <input
              className="note-form__input text text_regular color_text-primary"
              placeholder="Add text separated by commas (e.g. Work, Planning)"
              {...register("tags", {
                pattern: {
                  value: /[^,\s][^\,]*[^,\s]*/gi,
                  message: "Invalid format",
                },
              })}
              autoComplete="off"
            />
          </Meta>
          {isArchived && (
            <Meta icon={<IconStatus width={18} height={18} />} label="Status">
              <Text color="text-primary">Archived</Text>
            </Meta>
          )}
          <Meta icon={<IconClock width={18} height={18} />} label="Last Edited">
            <Text color={!!lastEdited ? "text-primary" : "light"}>
              {lastEditedStr}
            </Text>
          </Meta>
        </>
      }
      body={
        <textarea
          className="text text_regular note-form__input note-form__textarea"
          placeholder="Enter your text here..."
          {...register("content")}
        />
      }
      footer={
        <>
          <Button onClick={handleSubmit(onSubmit)} disabled={!isDirty}>
            Save Note
          </Button>
          <Button
            variant="default"
            color="secondary"
            onClick={() => reset()}
            disabled={!isDirty}
          >
            Cancel {errors.tags?.message}
          </Button>
        </>
      }
    />
  );
};

const Meta = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="note-form__meta">
        {icon}
        <Text color="inherit">{label}</Text>
      </div>
      {children}
    </>
  );
};

export default NoteForm;
