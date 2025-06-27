import React from 'react';

const ProfilePage = () => {

  const userEmail = 'PEPPINO@PIZZATOWER.COM'


  return (
    <section className="container my-5 text-center">
      <h2 className='fw-bolder text-uppercase'>Tu Perfil</h2>
      <p>Email: <span className='fw-bolder'>{userEmail}</span></p>
      <button className="btn btn-primary mt-3">
        Cerrar Sesión
      </button>
    </section>
  );
};

export default ProfilePage
