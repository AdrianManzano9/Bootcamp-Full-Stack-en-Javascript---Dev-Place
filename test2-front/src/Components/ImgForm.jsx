
export function ImgForm() {
   

    return (
        
        <form className="row g-3" action="/img" method="post" enctype="multipart/form-data">
            <div>
                <label for="formFileLg" className="form-label">Large file input example</label>
                <input className="form-control form-control-lg" name="file" id="formFileLg" type="file" />
            </div>
            <div class="mb-1">
                <input type="submit" name="submit_button" class="btn btn-primary" value="Enviar" />
            </div>
        </form>
    )
}
