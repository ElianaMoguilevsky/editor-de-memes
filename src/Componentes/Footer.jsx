import React from 'react';
import { MDBFooter, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-sm-start text-muted'>
      
      <section className='d-flex justify-content-center justify-content-sm-between p-4 border-bottom'>
       
       
             <p> © 2023 Eliana Moguilevsky</p>
 

        <div>

        <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/elianamoguilevsky/'
            role='button'
            target='blank'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/ElianaMoguilevsky'
            role='button'
            target='blank'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
           </div>
      </section>

      

    </MDBFooter>
  );
}