// import React from 'react'

const GenderCheckbox = ({handleGenderChange,selectGender}) => {
    	return (
    		<div className='flex'>
    			<div className='form-control'>
    				<label className={`label gap-2 cursor-pointer`}>
    					<span className='label-text'>Male</span>
    					<input
						checked={selectGender==='male'}
						onChange={()=>handleGenderChange('male')} type='checkbox' className='checkbox border-slate-900' />
    				</label>
    			</div>
    			<div className='form-control'>
    				<label className={`label gap-2 cursor-pointer`}>
    					<span className='label-text'>Female</span>
    					<input
						checked={selectGender==='female'}
						onChange={()=>handleGenderChange('female')} 
						type='checkbox' className='checkbox border-slate-900' />
    				</label>
    			</div>
    		</div>
    	);
    };

export default GenderCheckbox