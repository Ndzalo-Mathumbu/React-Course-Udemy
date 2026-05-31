import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

export default function UpdateUserDataForm() {
  const { user } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const email = user?.email;
  const currentFullName = user?.user_metadata?.fullName;

  const [fullName, setFullName] = useState(currentFullName || "");
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
    console.log("Full name:", fullName);
    console.log("Avatar file:", avatar);
  }

  const handleCancel = function () {
    setFullName(currentFullName);
    setAvatar(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          disabled={isUpdating}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>

      <FormRow label="Avatar image">
        <Input
          disabled={isUpdating}
          id="avatar"
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files?.[0])}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>

        <Button type="submit" disabled={isUpdating}>
          Update account
        </Button>
      </FormRow>
    </Form>
  );
}
