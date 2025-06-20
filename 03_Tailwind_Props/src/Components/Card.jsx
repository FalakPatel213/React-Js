import React from 'react';

function Card(props) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm bg-red-600 rounded-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{props.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                    <button className="btn btn-primary">{props.btnText || "Click Me"}</button>
                </div>
            </div>
        </div>
    );
}

export default Card;