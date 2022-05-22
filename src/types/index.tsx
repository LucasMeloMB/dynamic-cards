export type CustomAttribute = {
    attributeType: string;
    label: string;
    defaultInput: string;
    helpText: string;
    required: boolean;
    validationType?: string;
    maxInputs?: number;
    URIScheme?: string;
    RegexPattern?: string;
    allowedVallues?: string;
    multiSelect?: MultiSelect[];
    singleSelect?: SingleSelect;
    toggle?: boolean;
    checked?: boolean;
};

export type MultiSelect = {
    label: string;
    default: boolean;
};

export type SingleSelect = {
    label: string[];
    default?: string;
};

export type AttributeProps = {
    input: CustomAttribute;
    index: number;
    attributeForm: CustomAttribute[];
    setAttributeForm: (value: CustomAttribute[]) => void;
};
