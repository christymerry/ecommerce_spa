import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './Category.css'

function Category() {
const navigate = useNavigate();

const onDeptClick = (slug) => {
    navigate(`/Products/${slug}`);
}

  return (
    <div className='shop_by_department'>
                <h2 className='shop_by_department_heading'>Shop By Department</h2>
                <div className="departments_col1">
                    <div className="department_name1" onClick={() => onDeptClick('women')}>
                        <img className='image'
                        src="../../../Images/women.png"
                        alt=""
                        />
                        <button onClick={() => onDeptClick('women')} type="submit" className='deparment_button' >WOMENS</button>
                    </div>
                    <div className="department_name1">
                        <img className='image'
                        src="../../../Images/men.png"
                        alt=""
                        />
                        <button type="submit" className='deparment_button' >MENS</button>
                    </div>
                    <div className="department_name1">
                        <img className='image'
                        src="../../../Images/girl.png"
                        alt=""
                        />
                        <button type="submit" className='deparment_button' >GIRLS</button>
                    </div>
                    <div className="department_name1">
                        <img className='image'
                        src="../../../Images/boy.png"
                        alt=""
                        />
                        <button type="submit" className='deparment_button' >BOYS</button>
                    </div>
                </div>
                <div className="departments_col2">
                    <div className="department_name2">
                        <img className='image'
                        src="../../../Images/baby.png"
                        alt=""
                        />
                        <button type="submit" className='deparment_button' >Kids</button>
                    </div>
                    <div className="department_name2">
                        <img className='image'
                        src="../../../Images/christmas.png"
                        alt=""
                        />
                        <button type="submit" className='deparment_button' >Christmas</button>
                    </div>
                    <div className="department_name2">
                        <img className='image'
                        src="../../../Images/trending.png"
                        alt=""
                        />
                        <button type="submit" className='deparment_button' >Trending</button>
                    </div>

                </div>
            </div>
  )
}

export default Category
