import type { SearchFieldProps, ValidationResult } from "react-aria-components";

import {
  FieldError,
  Input,
  Label,
  SearchField as SearchFieldPrimitive,
  Text,
} from "react-aria-components";

import {MagnifyingGlass} from "@phosphor-icons/react"

interface MySearchFieldProps extends SearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

const SearchField = ({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: MySearchFieldProps) => {
  return (
    <SearchFieldPrimitive aria-label="Search flights" {...props} className={"relative w-full bg-bg-base h-12 rounded-2xl border border-border-base text-text-base"}>
      <MagnifyingGlass className="absolute top-1/2 left-3 -translate-y-1/2 text-text-base" />
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} className={"px-10 text-sm h-full w-full rounded-lg"} />
      {/* <Button><X/></Button> */}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </SearchFieldPrimitive>
  );
};

export default SearchField;
