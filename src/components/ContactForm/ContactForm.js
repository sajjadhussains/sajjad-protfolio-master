import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Aos from "aos";
import "aos/dist/aos.css";
import swal from 'sweetalert';

const ContactForm = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://creative-agency-as.herokuapp.com/privateMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    swal("Thank You!", "You message send successfully!", "success");
                }
            })
            .catch(error => {
                swal('Sorry', 'Something went wrong, try again later', 'error');
            })
    };
    return (
        <div className='container' id='contact-section'>
            <h1 className='text-white font-weight-bold mt-5 text-center mb-5'>Contact With Me</h1>
            <div className='d-flex justify-content-center row mb-5'>
            <div data-aos="zoom-in" className='col-md-7'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" className='form-control mb-3' placeholder="Your email address" name="email" ref={register({ required: true, maxLength: 80, pattern: /^\S+@\S+\.\S+$/ })} />
                    <p className="text-danger">{errors.email && <span>* This field is required / Use Valid Email</span>}</p>
                    <input className='form-control mb-3' type="text" placeholder="Your name / company's name" name="name" ref={register({ required: true, maxLength: 100 })} />
                    <p className="text-danger">{errors.name && <span>* This field is required</span>}</p>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Your message" name='message' rows="7" ref={register({ required: true })}></textarea>
                    </div>
                    <p className="text-danger">{errors.message && <span>* This field is required</span>}</p>
                    <input className='btn btn-block btn-outline-custom font-weight-bold text-white p-2' type="submit" value='Send Message' />
                </form>
            </div>
            </div>
        </div>
    );
};

export default ContactForm;