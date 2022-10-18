import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export default function NavBar(){
    return <nav className="nav">

<div className='title' style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}}>
    <LocalLibraryIcon />
    &nbsp;
    <span> S P E E D</span>
</div>  
        <ul>
            <li>
                <a href="/">HOME</a>
                </li>
                <li><a href="/create-book">ADD ARTICLE</a> </li>
                {/* <li><a href="/">SEARCH</a></li> */}
                <li><a href="/view-articles">VIEW ALL</a></li>
                <li><a href="/mod-view">MOD VIEW</a></li>
        </ul>
    </nav>;
}