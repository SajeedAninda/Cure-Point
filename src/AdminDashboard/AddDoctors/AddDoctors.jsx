import React, { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import useAxiosInstance from '../../Hooks/useAxiosInstance'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const AddDoctors = () => {
  const [doctorName, setDoctorName] = useState('')
  const [doctorEmail, setDoctorEmail] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  const navigate = useNavigate();

  const imgBBAPI = 'cbd289d81c381c05afbab416f87e8637'
  let axiosInstance = useAxiosInstance()

  const handleFileChange = event => {
    setImageFile(event.target.files[0])
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    if (!imageFile || !doctorName || !doctorEmail || !speciality) {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Please submit all fields correctly'
      })
      return
    }

    const formData = new FormData()
    formData.append('image', imageFile)

    const response = await axiosInstance.post(
      `https://api.imgbb.com/1/upload?key=${imgBBAPI}`,
      formData
    )

    if (response.data.success) {
      const uploadedImageUrl = response.data.data.display_url
      setImageUrl(uploadedImageUrl)

      const doctorDetails = {
        name: doctorName,
        email: doctorEmail,
        speciality: speciality,
        image: uploadedImageUrl
      }

      axiosInstance.post('/addDoctors', doctorDetails).then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Doctor is Added',
            text: 'You Have Succesfully Added the Doctor'
          })
        }
      })
    }
  }

  return (
    <div className='w-[75%] h-fit px-10 py-6'>
      <h3 className='text-[24px] font-bold text-[#191919]'>Add A New Doctor</h3>
      <form
        onSubmit={handleFormSubmit}
        className='bg-white w-[60%] rounded-lg h-fit px-10 py-12 mt-6'
      >
        <div>
          <label htmlFor='doctorName' className='font-semibold text-[#191919]'>
            Name
          </label>
          <br />
          <input
            className='py-3 mt-2 rounded-lg px-4 placeholder:text-gray-400 border-2 border-gray-300 w-full'
            type='text'
            placeholder='Please Enter Doctor’s Name'
            value={doctorName}
            onChange={e => setDoctorName(e.target.value)}
          />
        </div>

        <div className='mt-6'>
          <label
            htmlFor='doctorsEmail'
            className='font-semibold text-[#191919]'
          >
            Email
          </label>
          <br />
          <input
            className='py-3 mt-2 rounded-lg px-4 placeholder:text-gray-400 border-2 border-gray-300 w-full'
            type='email'
            placeholder='Please Enter Doctor’s Email'
            value={doctorEmail}
            onChange={e => setDoctorEmail(e.target.value)}
          />
        </div>

        <div className='mt-6'>
          <label htmlFor='speciality' className='font-semibold text-[#191919]'>
            Speciality
          </label>
          <br />
          <select
            className='py-3 mt-2 rounded-lg px-4 border-2 border-gray-300 w-full'
            value={speciality}
            onChange={e => setSpeciality(e.target.value)}
          >
            <option value=''>Select Speciality</option>
            <option value='orthodontics'>Teeth Orthodontics</option>
            <option value='cosmetic'>Cosmetic Dentistry</option>
            <option value='teethCleaning'>Teeth Cleaning</option>
            <option value='cavity'>Cavity Protection</option>
            <option value='pediatric'>Pediatric Dental</option>
            <option value='oral'>Oral Surgery</option>
          </select>
        </div>

        <input
          type='file'
          id='fileInput'
          className='hidden'
          onChange={handleFileChange}
          accept='image/*'
        />
        <div
          className='mt-10 w-full border-2 border-dotted border-gray-400 p-10 rounded-lg flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-200'
          onClick={() => document.getElementById('fileInput').click()}
        >
          {imageFile ? (
            <p className='text-gray-500 font-semibold'>{imageFile.name}</p>
          ) : (
            <>
              <p className='text-gray-500 font-semibold'>Upload Your Photo</p>
              <FaUpload className='text-gray-500' />
            </>
          )}
        </div>

        <button
          type='submit'
          className='w-full py-3 rounded-lg bg-[#07332F] text-white hover:bg-opacity-50 transition-all duration-300 mt-6'
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddDoctors
