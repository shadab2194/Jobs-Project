import React, { useState, useEffect } from 'react';


const employmentTypesList = [
    {
        label: 'Full Time',
        employmentTypeId: 'FULLTIME',
    },
    {
        label: 'Part Time',
        employmentTypeId: 'PARTTIME',
    },
    {
        label: 'Freelance',
        employmentTypeId: 'FREELANCE',
    },
    {
        label: 'Internship',
        employmentTypeId: 'INTERNSHIP',
    },
];

const salaryRangesList = [
    {
        salaryRangeId: '1000000',
        label: '10 LPA and above',
    },
    {
        salaryRangeId: '2000000',
        label: '20 LPA and above',
    },
    {
        salaryRangeId: '3000000',
        label: '30 LPA and above',
    },
    {
        salaryRangeId: '4000000',
        label: '40 LPA and above',
    },
]
const FiltersGroup = (props) => {

    const { onChangeEmploymentType } = props;

    const [allValue, setValue] = useState({
        profileDetails: {}
    })


    useEffect(() => {

        const getProfileDetails = async () => {

            const apiUrl = 'https://apis.ccbp.in/profile'
            const options = {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU`,
                },
                method: 'GET',
            }
            const response = await fetch(apiUrl, options)
            const data = await response.json()
            console.log(data)
            if (response.ok === true) {
                setValue({ ...allValue, profileDetails: data.profile_details })
            }
        }
        getProfileDetails();

    }, [])



    const renderEmploymentTypesList = () => {

        const onChangeEmpType = (event) => {

            const isChecked = event.target.checked;

            onChangeEmploymentType(event.target.value, isChecked);
        }

        return employmentTypesList.map(eachType => {

            return (
                <li className="flex items-center text-blue-500" key={eachType.employmentTypeId}>
                    <input
                        type="checkbox"
                        className="w-3 h-3"
                        value={eachType.employmentTypeId}
                        onChange={onChangeEmpType}
                    />
                    <label htmlFor={eachType.employmentTypeId} className="ml-4 text-white">
                        {eachType.label}
                    </label>
                </li>
            )
        })
    }

    const renderEmploymentTypes = () => (
        <>
            <h1 className="m-0 text-white">Type of Employment</h1>
            <ul className="pl-0 list-none flex flex-col m-0 gap-4">{renderEmploymentTypesList()}</ul>
        </>
    )

    const renderSalaryRangesList = () => {

        return salaryRangesList.map(eachRange => {


            return (
                <li className="flex items-center" key={eachRange.salaryRangeId}>
                    <input
                        type="radio"
                        className="w-3 h-3 "
                        value={eachRange.salaryRangeId}
                        name="salary ranges"
                    />
                    <label htmlFor={eachRange.salaryRangeId} className="ml-4">
                        {eachRange.label}
                    </label>
                </li>
            )
        })
    }

    const renderSalaryRangesTypes = () => (
        <>
            <h1 className="m-0 text-white">Salary Range</h1>
            <ul className="pl-0 list-none flex flex-col m-0 gap-4 text-white">{renderSalaryRangesList()}</ul>
        </>
    )

    const renderProfileDetails = () => (
        <div className="p-5 h-44 border rounded-2xl">
            <img src={allValue.profileDetails.profile_image_url} alt="profile" className="w-16 h-14" />
            <h1 className="text-white  mt-1 mb-0 ">{allValue.profileDetails.name}</h1>
            <p className="text-white leading-none ">{allValue.profileDetails.short_bio}</p>
        </div>
    )
 
    return (
        <div className="flex flex-col gap-10 pb-7 pl-7 ">
            {renderProfileDetails()}
            {renderEmploymentTypes()}
            <hr />
            {renderSalaryRangesTypes()}
        </div>
    )
}




export default FiltersGroup
