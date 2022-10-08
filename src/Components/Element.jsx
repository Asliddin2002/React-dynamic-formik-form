import TextfieldWrapper from "./FormsUI/Textfield";
import SelectWrapper from "./FormsUI/Select";
import CheckboxWrapper from "./FormsUI/Checkbox";
import DateTimePicker from "./FormsUI/DataTimePicker";

const Element = ({field:{
    name,
    label,
    options,
    multiline,
    rows,
    legend,
    type
}}) => {
    switch (type) {
        case "text":
            return (
                <TextfieldWrapper
                    label={label}
                    name={name}
                    multiline={multiline}
                    rows={rows}
                />
            );
        case "select":
            return (
                <SelectWrapper
                    label={label}
                    name={name}
                    options={options}
                />
            );
        case "checkbox":
            return (
                <CheckboxWrapper
                    label={label}
                    name={name}
                    legend={legend}
                />
            );
        case "date":
            return (
                <DateTimePicker
                    label={label}
                    name={name}
                />
            );
        default:
            return null;
    }
}

export default Element;