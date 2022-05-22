import { useEffect, useState } from 'react';
import { AttributeProps } from '../types';
import './card.scss';
import SelectAttributeType from './selectType';

function TextBoxAttribute({
    input,
    index,
    attributeForm,
    setAttributeForm,
}: AttributeProps) {
    const [select, setSelect] = useState('url');

    useEffect(() => {
        let data: any = [...attributeForm];
        data[index]['validationType'] = 'url';
        setAttributeForm(data);
    }, []);

    const handleSelectChange = (index: any, event: any) => {
        let data: any = [...attributeForm];
        // data[index][event.target.name] = event.target.value;
        data[index] = {
            ...data[index],
            validationType: event.target.value,
            URIScheme: null,
            RegexPattern: null,
            allowedVallues: null,
        };
        setAttributeForm(data);
        setSelect(event.target.value);
    };

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
            <select
                value={select}
                name='validationType'
                onChange={(event) => handleSelectChange(index, event)}
            >
                <option value={'url'}>URL</option>
                <option value={'email'}>Email address</option>
                <option value={'number'}>Number</option>
                <option value={'text'}>Text</option>
            </select>
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
                Select Max Number of Inputs:
                <input
                    type='number'
                    name='maxInputs'
                    placeholder='Select Max Number of Inputs'
                    value={input.maxInputs}
                    onChange={(event) => handleValueChange(index, event)}
                />
            </label>
            {attributeForm[index].validationType === 'url' && (
                <>
                    <label className='label'>
                        Select URI Scheme:
                        <input
                            type='text'
                            name='URIScheme'
                            placeholder='Select URI Scheme'
                            value={input.URIScheme}
                            onChange={(event) =>
                                handleValueChange(index, event)
                            }
                        />
                    </label>
                    <label className='label'>
                        Regex Pattern:
                        <input
                            type='text'
                            name='RegexPattern'
                            placeholder='Regex Pattern'
                            value={input.RegexPattern}
                            onChange={(event) =>
                                handleValueChange(index, event)
                            }
                        />
                    </label>
                    <label className='label'>
                        Allowed Vallues:
                        <input
                            type='text'
                            name='allowedVallues'
                            placeholder='Allowed Vallues'
                            value={input.allowedVallues}
                            onChange={(event) =>
                                handleValueChange(index, event)
                            }
                        />
                    </label>
                </>
            )}

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

export default TextBoxAttribute;
