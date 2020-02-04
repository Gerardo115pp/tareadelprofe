import React, { Component} from 'react';
import code_i from './code_imgs/code_1.png';
import code_ii from './code_imgs/code_2.png';
import code_iii from './code_imgs/code_3.png';
import code_vi from './code_imgs/code_4.png';
import code_v from './code_imgs/code_5.png';
import './App.css';

class App extends Component
{

	digits = '0123456789ABCDEFGHIJKLMNOPQRST';

	state = {
		num: null,
		base_a: "01",
		base_b: "01",
		result: null,
		values_ready: false
	}

	valueToRepresentation = (n, base) => {
		const base_string_length = base.length;
		let digits = '';
		while(n > 0)
		{
			digits = base[n % base_string_length] + digits;
			n = Math.floor(n/base_string_length);
		}
		return digits;
	}

	representationToValue = (digits, base) => {
		const base_string_length = base.length;
		let n = 0;
		for(let digit of digits)
		{
			n = base_string_length * n + base.indexOf(digit);
		}
		return n;
	}

	BaseToBase = (digits, base1, base2) => {
		return this.valueToRepresentation(this.representationToValue(digits, base1), base2);
	}

	getBaseDigits = base => {
		const digits = [];
		for(let h=0; h<base; h++)
		{
			digits.push(this.digits[h]);
		}
		return digits.join("");
	}
	  
	areValuesValid = (base_a_change=false) => {
		if(base_a_change)
		{
			if(!this.belongsToBaseA(this.state.num))
			{
				const num_container = document.querySelector('#input-value-container input');
				num_container.value =  "";
				return;
			}
		}
		this.setState({values_ready: /^[\da-tA-T]+$/i.test(this.state.num) });
	}

	belongsToBaseA = num => {
		const { base_a } = this.state;
		for(let digit of num)
		{
			if(base_a.indexOf(digit) === -1)
			{
				return false;
			}
		}
		return true;
	}

	handelNumChange = e => {
		const { target } = e;
		if(this.belongsToBaseA(target.value))
		{
			this.setState({
				num: target.value
			}, this.areValuesValid)
		}
		else
		{
			target.value = this.state.num;
		}
	}

	handelBaseChange = e => {
		const { target } = e;
		let { state:new_state } = this; 
		const base = parseInt(target.value),
			  target_name = target.getAttribute('name');
		new_state[target_name] = this.getBaseDigits(base);
		const callback = target_name==='base_a' ? () => this.areValuesValid(true) : () => this.areValuesValid();
		this.setState(new_state, callback);
	}

	render()
	{
		const { num, base_a, base_b } = this.state;
		const result_number = this.state.values_ready ? this.BaseToBase(num, base_a, base_b) : "";	
		return (
			<div className="App">
				<div id="calculator-container">
					<div id="input-value-container">
						<input onChange={this.handelNumChange} type="text"/>
					</div>
					<div id="actual"  className="base_picking">
						<select onChange={this.handelBaseChange} name="base_a" id="">
							<option value="2">base 2</option>
							<option value="3">base 3</option>
							<option value="4">base 4</option>
							<option value="5">base 5</option>
							<option value="6">base 6</option>
							<option value="7">base 7</option>
							<option value="8">base 8</option>
							<option value="9">base 9</option>
							<option value="10">base 10</option>
							<option value="11">base 11</option>
							<option value="12">base 12</option>
							<option value="13">base 13</option>
							<option value="14">base 14</option>
							<option value="15">base 15</option>
							<option value="16">base 16</option>
							<option value="17">base 17</option>
							<option value="18">base 18</option>
							<option value="19">base 19</option>
							<option value="20">base 20</option>
							<option value="21">base 21</option>
							<option value="22">base 22</option>
							<option value="23">base 23</option>
							<option value="24">base 24</option>
							<option value="25">base 25</option>
							<option value="26">base 26</option>
							<option value="27">base 27</option>
							<option value="28">base 28</option>
							<option value="29">base 29</option>
							<option value="30">base 30</option>
						</select>
						<h4>Base actual</h4>
					</div>
					<div id="objetivo"  className="base_picking">
						<select onChange={this.handelBaseChange} name="base_b" id="">
							<option value="2">base 2</option>
							<option value="3">base 3</option>
							<option value="4">base 4</option>
							<option value="5">base 5</option>
							<option value="6">base 6</option>
							<option value="7">base 7</option>
							<option value="8">base 8</option>
							<option value="9">base 9</option>
							<option value="10">base 10</option>
							<option value="11">base 11</option>
							<option value="12">base 12</option>
							<option value="13">base 13</option>
							<option value="14">base 14</option>
							<option value="15">base 15</option>
							<option value="16">base 16</option>
							<option value="17">base 17</option>
							<option value="18">base 18</option>
							<option value="19">base 19</option>
							<option value="20">base 20</option>
							<option value="21">base 21</option>
							<option value="22">base 22</option>
							<option value="23">base 23</option>
							<option value="24">base 24</option>
							<option value="25">base 25</option>
							<option value="26">base 26</option>
							<option value="27">base 27</option>
							<option value="28">base 28</option>
							<option value="29">base 29</option>
							<option value="30">base 30</option>
						</select>
						<h4>Base objetivo</h4>
					</div>
				</div>
				<div id="result-container">
					<h1>{result_number}</h1>
				</div>
				<div id="codeimgs-container">
					<div className="codeimg-container">
						<img src={code_i} alt=""/>
					</div>
					<div className="codeimg-container">
						<img src={code_ii} alt=""/>
					</div>
					<div className="codeimg-container">
						<img src={code_iii} alt=""/>
					</div>
					<div className="codeimg-container">
						<img src={code_vi} alt=""/>
					</div>
					<div className="codeimg-container">
						<img src={code_v} alt=""/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
