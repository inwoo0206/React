import Post from './models/post';

export default function createFakeData(){
    const posts = [...Array(40).keys()].map(i => ({
        title: `Post #${i}`,
        body : 'Lorem ipsum dolor sit amet, consectetur adip',
        tags : ['Dummy', 'Data'],
    }));
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}

