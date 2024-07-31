import React from "react";

export default function KeyValueText({
  className='',
  title='Title Not Found',
  value='',
}: {
  className?: string;
  title: string;
  value: any;
}) {

    if(!value) return;
  return (
    <span className={`flex gap-2 ${className}`}>
      <p className="">{title}: </p>
      <p className="">{value}</p>
    </span>
  );
}
