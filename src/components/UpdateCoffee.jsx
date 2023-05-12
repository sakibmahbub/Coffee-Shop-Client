import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-4xl font-bold text-center mb-10">
        Update Coffee : {name}
      </h1>
      <form onSubmit={handleUpdateCoffee}>
        {/* Name & Quantity Row */}
        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Coffee Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                name="quantity"
              />
            </label>
          </div>
        </div>
        {/* Supplier and Taste row */}
        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={supplier}
                placeholder="Coffee Supplier"
                className="input input-bordered w-full"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={taste}
                placeholder="Coffee Taste"
                className="input input-bordered w-full"
                name="taste"
              />
            </label>
          </div>
        </div>
        {/* Category and Details row */}
        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={category}
                placeholder="Coffee Category"
                className="input input-bordered w-full"
                name="category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={details}
                placeholder="Coffee Details"
                className="input input-bordered w-full"
                name="details"
              />
            </label>
          </div>
        </div>
        {/* Photo url row */}
        <div className=" mb-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={photo}
                placeholder="Photo url"
                className="input input-bordered w-full"
                name="photo"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
