export const subBullet = {
    marginLeft: "2em",
    size: 10
}

export default () => {
    return <div style={{color: "black", background: 'lightGray', marginBottom: '320px', width: '100%'}}>
        <div style={{width: '50%', margin: '0 auto'}}>
            <h3>Education</h3>
            <ul>
                <li>BS Computer Science Touro University</li>
                <ul style={{paddingBottom: 0}}>
                    <li style={subBullet}> Data Structures I and II</li>
                    <li style={subBullet}>Database Management and Administration</li>
                    <li style={subBullet}>Programming Languages</li>
                    <li style={subBullet}>Computer Architecture</li>
                    <li style={subBullet}>Operating Systems</li>
                    <li style={subBullet}>Discrete Mathematics</li>
                </ul>
            </ul>
        </div>
    </div>
}