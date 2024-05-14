function SearchItemHeader(props) {
    console.log(props);
    const ItemHeader = () => {
        switch (props.header.type) {
            case "blog":
            case "cafe":
                return (
                    <div className="flex flex-row gap-1">
                        <div>{props.header.title}</div>
                        <div>·</div>
                        <div>{props.header.createAt}</div>
                    </div>
                );
            case "shopping":
                return (
                    <div className="flex flex-row gap-1">
                    </div>
                );
            case "house":
                return (
                    <div className="flex flex-row gap-1">
                    </div>
                );
            default:
                return (
                    ""
                );
        }
    }

    return (
        <ItemHeader />
    );
  }
  
  export default SearchItemHeader;
  