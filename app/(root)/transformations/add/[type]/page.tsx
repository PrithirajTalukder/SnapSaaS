import React from 'react'
import Header from '@/components/shared/Header'
import { transformationTypes } from '@/constants'
import Transformationform from '@/components/shared/Transformationform';


const AddTransformationTypePage = ({params: {type}}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (

    <>
    <Header 
    title={transformation.title}
    subtitle={transformation.subTitle}
    />
  

    <Transformationform />

    </>
    
  )
}

export default AddTransformationTypePage