import { AttributeProps } from '../types';
import './card.scss';
import SelectAttributeType from './selectType';

function TextAreaAttribute({
    input,
    index,
    attributeForm,
    setAttributeForm,
}: AttributeProps) {
    const handleValueChange = (index: any, event: any) => {
        let data: any = [...attributeForm];
        data[index][event.target.name] = event.target.value;
        setAttributeForm(data);
    };

    const handleCheckChange = (index: any, event: any) => {
        let data: any = [...attributeForm];
        data[index][event.target.name] = event.target.checked;
        setAttributeForm(data);
    };

    return (
        <div key={index} className='card'>
            <SelectAttributeType
                index={index}
                attributeForm={attributeForm}
                setAttributeForm={setAttributeForm}
                selectValue={attributeForm[index].attributeType}
            ></SelectAttributeType>
            <label className='label'>
                Label:
                <input
                    type='text'
                    name='label'
                    placeholder='Label'
                    value={input.label}
                    onChange={(event) => handleValueChange(index, event)}
                />
            </label>
            <label className='label'>
                Default Input:
                <input
                    type='text'
                    name='defaultInput'
                    placeholder='Default Input'
                    value={input.defaultInput}
                    onChange={(event) => handleValueChange(index, event)}
                />
            </label>
            <label className='label'>
                Help Text:
                <input
                    type='text'
                    name='helpText'
                    placeholder='Help Text'
                    value={input.helpText}
                    onChange={(event) => handleValueChange(index, event)}
                />
            </label>
            <label>
                <input
                    type='checkbox'
                    name='required'
                    placeholder='Required'
                    checked={input.required}
                    onChange={(event) => handleCheckChange(index, event)}
                />
                Required
            </label>
        </div>
    );
}

export default TextAreaAttribute;
