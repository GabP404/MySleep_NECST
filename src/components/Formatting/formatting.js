 

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

const formatAxis_time = (number) => {
    return padTo2Digits(number)+":00";
};

const formatAxis = (value, type) =>{
    if(type == 'time') formatAxis_time(value);
}
