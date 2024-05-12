import React, { useState } from 'react';

import Input from 'components/input/Input';
import Button from 'components/button/Button';
import { BallContact, Attach, MapContact } from 'components/icons';

import style from './style.module.css';

type InputName = 'email' | 'phone' | 'message';

export default function ContactUsContainer() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const listInputs = [
    { placeholder: 'Email address *', type: 'email', name: 'email' },
    { placeholder: 'Number phone *', type: 'number', name: 'phone' },
    { placeholder: 'Say what you want', type: 'text', name: 'message' },
  ];

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit() {}

  return (
    <>
      <section className={style.contact}>
        <div className="container-custom">
          <div className={style.contact_content}>
            <div className={style.contact_left}>
              <div className={style.contact_left_content}>
                <div className={style.contact_title}>get in touch</div>
                <div className={style.contact_text}>
                  lets work together. please fill in our project inquiry form
                  and we will get back to you shortly
                </div>
                <a aria-label="logo" target="_self" rel="noopener">
                <img src="/img/logo3.png" alt="logo"/>
              </a>
                
              </div>
              {/* <BallContact /> */}
            </div>
            <div className={style.contact_right}>
              <form onSubmit={handleSubmit} className={style.contact_form}>
                {listInputs.map(({ placeholder, type, name }, key) => {
                  return (
                    <>
                      <Input
                        key={key}
                        name={name}
                        value={formData[name as InputName]}
                        placeholder={placeholder}
                        onChange={onChangeInput}
                        type={type}
                      />
                    </>
                  );
                })}
                <div className={style.contact_form_bottom}>
                  <Button type="submit">sent</Button>
                </div>
              </form>
              <div className={style.contact_map}>
                <MapContact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
