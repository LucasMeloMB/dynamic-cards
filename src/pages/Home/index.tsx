import React, { useState } from 'react';
import SelectAttributeType from '../../components/selectType';
import TextAreaAttribute from '../../components/textarea';
import TextBoxAttribute from '../../components/textbox';
import { CustomAttribute } from '../../types';
import './home.scss';

function Home() {
    const [attributeForm, setAttributeForm] = useState<CustomAttribute[]>([]);

    const attributeType = (input: CustomAttribute, index: number) => {
        switch (input.attributeType) {
            case 'textBox':
                return (
                    <TextBoxAttribute
                        key={index}
                        input={input}
                        index={index}
                        attributeForm={attributeForm}
                        setAttributeForm={setAttributeForm}
                    />
                );
            case 'textArea':
                return (
                    <TextAreaAttribute
                        key={index}
                        input={input}
                        index={index}
                        attributeForm={attributeForm}
                        setAttributeForm={setAttributeForm}
                    />
                );
            default:
                <></>;
        }
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(attributeForm);
    };
    return (
        <div className='home'>
            <form className='form' onSubmit={onSubmit}>
                <SelectAttributeType
                    attributeForm={attributeForm}
                    setAttributeForm={setAttributeForm}
                ></SelectAttributeType>
                {attributeForm.map((input, index) => {
                    return attributeType(input, index);
                })}
                <input type='submit' value='Enviar' />
            </form>
        </div>
    );
}

export default Home;
