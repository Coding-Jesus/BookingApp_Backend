import React from 'react'
import useFetch from '../../hooks/useFetch';
import './cities.css'


const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Berlin,Madrid,Canada");

    return (
        <div className="featured">
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img
                            src="/images/templebar.png"
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>Ireland</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img
                            src="/images/berlin.png"
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>Berlin</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            src="/images/prauge.png"
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>Prauge</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>)}
        </div>
    );
};

export default Featured;