import { getCountries } from "@/app/_lib/data-service";

// Let's imagine your colleague already built this component 😃

async function SelectCountry({ defaultCountry, name, id, className }) {
  const { data: countries } = await getCountries(defaultCountry);
  const flag =
    countries.objects.find(
      (country) => country.names?.common === defaultCountry,
    )?.flag?.png ?? "";
  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value={defaultCountry}>Select country...</option>
      {countries.objects.map((c) => (
        <option key={c.uuid} value={`${c.names?.common}|${c.flag?.png}`}>
          {c.names?.common}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
