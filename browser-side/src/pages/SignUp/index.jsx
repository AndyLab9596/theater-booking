import React from 'react';
import Login from '../../components/FormControl';
import './style.scss';
const SignUpPage = () => {
    return (
        <div className="backgroundSign">
            <section className="md:container mx-auto flex justify-center align-middle" >
                <main className="pt-14 w-full max-w-xl">
                    <Login />
                </main>

            </section>
        </div>
    );
};

export default SignUpPage;