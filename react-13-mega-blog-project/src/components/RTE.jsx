import React from 'react'
// RTE is the Real Time Editor that we took from cloud and it is used to write blogs (like word doc)

import { Editor } from "@tinymce/tinymce-react"
import { Controller } from 'react-hook-form'

// Now since the editor is being made in a separate component, the main issue is that how will we get its reference.

// One way is to use forwardRef like we did before

// But since we are using react-hook-form, we will use a { Controller }

// docs: https://react-hook-form.com/get-started#IntegratingControlledInputs

export default RTE = ({name, control, label, defaultValue = ""}) => {
  // control comes from react hook form and here it takes all the info from this state to the form (react hook form)
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>
        {label}
      </label>}


      {/* Docs Syntax */}
      {/* <Controller
        name="MyCheckbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      /> */}

      <Controller
      name = {name || "content"}
      // if name does not exist then pass content
      control={control}
      // Whatever parent element will call it will have control of this
      render = {({field: {onChange}}) => (
        // We put the tracking on the onChange property of field

        <Editor
        initialValue = {defaultValue}
        init={
        // what values do you want inside of this after it is initialized
        {
          initialValue: defaultValue, 
          height: 500, // 500px
          menubar: true, 
          plugins: [
            'image',
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
            'anchor',
          ],
          toolbar:
            'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
            content_style: "body {font-family: Helvetica, Arial, sans-serif; font-size:14px} "         
        }}
        onEditorChange={onChange}
        />
      )}
    />
    </div>
  )
}

//  🛑🛑 27. Go to post-form/PostForm.jsx
