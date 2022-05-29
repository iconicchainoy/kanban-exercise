import React from 'react';


export const ExampleComponent = ({name, ...rest}) => {
  return (
    <p> ExampleComponent with name: {name}<br/>
    I'm presentational component, remove me before before starting the exercise
    </p>
  )
}
