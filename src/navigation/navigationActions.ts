import * as React from 'react';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function navigate(name, params?){
  if (isReadyRef.current && navigationRef.current) {
    if(params){
        navigationRef.current.navigate(name, params);
    }else{
        navigationRef.current.navigate(name);
    }
  } else {}
}