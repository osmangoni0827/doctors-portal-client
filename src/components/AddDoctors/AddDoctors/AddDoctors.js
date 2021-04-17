import React, { useState } from 'react';
import Slider from '../../Shared/Slider/Slider';

const AddDoctors = () => {

    const [info, setinfo] = useState({});
    const [file, setfile] = useState(null);

    const HandleBlurChange = (e) => {
        const Newinfo = { ...info };
        Newinfo[e.target.name] = e.target.value;
        setinfo(Newinfo);

    }
    

    const HandleFileChange = (e) => {
        const files = e.target.files
        setfile(files[0]);
    }

    const HandleSubmit=(e)=>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        fetch('https://secret-waters-40749.herokuapp.com/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if(data){
                    alert('New Doctor added')
                }
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
    }

    return (
        <div className='row mt-0'>
            
           <div className='col-md-3'>
           <Slider></Slider>
           </div>
            <div className='col-md-8 p-5'>
                <form action='' onSubmit={HandleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email </label>
                        <input type="email" onBlur={HandleBlurChange} className="form-control" name='email' placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" onBlur={HandleBlurChange} className="form-control" name='name' placeholder="name" />
                    </div>
                    <div class="form-group">
                        <label >Your Image</label>
                        <input type="file" onChange={HandleFileChange} class="form-control" name='file' />
                    </div>
                    <button type="submit"  class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;