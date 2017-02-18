inView.offset(50);

inView('.mov')
    .on('enter', el =>
        el.classList.add('tada'))
    .on('exit', el =>
        el.classList.remove('tada'));