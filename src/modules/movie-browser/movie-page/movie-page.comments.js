import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = {
    
}

const CommentsComp = (comments) => {
    let commentsDiv =null;
    console.log(`Comments received is ${Object.keys(comments.comments)}`)
        if(comments.comments!==null){
            commentsDiv = comments.comments.map(comment => 
                (<div><ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary={<React.Fragment>
                            <Typography
                                component="span"
                                variant="body2" 
                                style={{                                   
                                    fontWeight: "400",
                                    fontSize: "1.2rem"
                                }}      
                            >
                                {comment.author}
                            </Typography>
                            </React.Fragment>
}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2" 
                                style={{
                                    color: "#848484",
                                    fontWeight: "400",
                                    fontSize: "1.2rem"
                                }}      
                            >
                                {comment.content}
                            </Typography>

                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" /></div>))
        }
        

        return(
            <List >
                {commentsDiv}
            </List>
        )

}

export default CommentsComp