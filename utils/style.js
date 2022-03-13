import { makeStyles } from "@material-ui/core";

const my_style = makeStyles({
    navbar : {
        backgroundColor: '#203040',
        '& a':{
            color:'#ffffff',
            marginLeft: 10,
        }
    },
    main : {
        minHeight:'80vh',
        '& li' : {
            padding: '5px',
            fontWeight:'500',
        },
    },
    footer : {
        textAlign : 'center',
    }
});

export default my_style;