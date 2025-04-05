import React from 'react';

const ACI = () => {
    return (
      <div className='mb-0'>
        <div className="bg-sky-300 pb-2 ">
          <div className="-ml-40 ">
            <img src="https://i.ibb.co.com/hJXvhXcG/aci2-removebg-preview.png"  />
          </div>

          <div className="ml-8 -mt-4 text-sm">
            <h1>
              <span className="font-bold">Address</span> : ACI Centre, 245
              Tejgaon Industrial Area, Dhaka.
            </h1>
            <h1>
              <span className="font-bold">Customer Care</span> : 16533
            </h1>
            <h1>
              <span className="font-bold">Operating Hours</span> : 9am to 8pm,
              Saturday-Thursday
            </h1>
            <h1>
              <span className="font-bold">Email</span> : info@acimotors-bd.com
            </h1>
          </div>
        </div>

        <div className="mt-4 mx-8 text-lg">
          <div className="flex ">
            <div className="space-y-2">
              <h1 className="font-bold text-2xl">Delivary Challan</h1>
              <h1>Invoice no : </h1>
            </div>
            <div className="ml-[300px]">
              <h1 className="mt-2">Date : </h1>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="mt-4 space-y-4">
            <h1 className="text-xl font-bold">From </h1>
            <div className="space-y-4">
              <h1>Phone : </h1>
              <h1>E-mail : </h1>
              <h1>Address : </h1>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h1 className="text-xl font-bold">Description </h1>
          </div>

          <div className="mt-28 space-y-4">
            <h1 className="text-xl font-bold">Ship to </h1>
            <div className="space-y-4">
              <h1>Name : </h1>
              <h1>Father / Husband : </h1>
              <h1>Phone : </h1>
              <h1>Address : </h1>
            </div>
          </div>

          <div className="my-8 mt-16 font-extrabold">
            <hr />
          </div>

          <div className="flex justify-between text-lg font-semibold my-10 mt-24 w-11/12 mx-auto">
            <h1 className="border-t-2 pt-2">Officer Signature</h1>
            <h1 className="border-t-2 pt-2">Client Signature</h1>
            <h1 className="border-t-2 pt-2">Business Signature</h1>
          </div>
        </div>
      </div>
    );
};

export default ACI;