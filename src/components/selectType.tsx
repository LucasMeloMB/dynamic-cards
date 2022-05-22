import { useState } from 'react';
import { CustomAttribute } from '../types';
import './card.scss';

type SelectAttributeTypeProps = {
    selectValue?: string;
    index?: number;
    attributeForm: CustomAttribute[];
    setAttributeForm: (value: CustomAttribute[]) => void;
};

function SelectAttributeType({
    index,
    selectValue,
    attributeForm,
    setAttributeForm,
}: SelectAttributeTypeProps) {
    const [select, setSelect] = useState(selectValue ? selectValue : '');

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let newfield: CustomAttribute = {
            attributeType: event.target.value,
            label: '',
            defaultInput: '',
            helpText: '',
            required: false,
        };

        if (index === 0) {
            let data: any = [...attributeForm];
            data[index] = newfield;
            setAttributeForm(data);
            setSelect(event.target.value);
        } else if (index) {
            let data: any = [...attributeForm];
            data[index] = newfield;
            setAttributeForm(data);
            setSelect(event.target.value);
        } else {
            setAttributeForm([...attributeForm, newfield]);
            setSelect('');
        }
    };

    return (
        <select value={select} onChange={onSelectChange}>
            <option value={''} hidden>
                Select a Custom Attribute
            </option>
            <option value={'textBox'}>Text Box</option>
            <option value={'textArea'}>Text Area</option>
        </select>
    );
}

export default SelectAttributeType;
