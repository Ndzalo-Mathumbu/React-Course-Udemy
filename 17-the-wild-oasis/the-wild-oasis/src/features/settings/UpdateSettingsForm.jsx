import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useFetchSettings from "./useFetchSettings";
import useUpdateSetting from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    settingsData: {
      minBookingLength,
      maxBookingLength,
      maxNumberPerBooking,
      breakfastPrice,
    } = {},
    error,
    loadingSettings,
  } = useFetchSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();
  if (loadingSettings) return <Spinner />;

  const handleUpdated = function (e, fieldName) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({
      [fieldName]: value,
    });
  };

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdated(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdated(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxNumberPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdated(e, "maxNumberPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          onBlur={(e) => handleUpdated(e, "breakfastPrice")}
          disabled={isUpdating}
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
