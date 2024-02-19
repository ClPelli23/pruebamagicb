function Formulario () {

return(
// <!-- <form action="php/validation.php" method="post"> --> Lo comento hasta que acabe el frontend


    <>
        <div className="inputs">
            <div className="input-style">
                <input type="text" name="nombre" value="" placeholder="<?=$txt['nombre']?>*" required />
            </div>
            <div className="input-style">
                <input type="text" name="apellidos" value="" placeholder="<?=$txt['apellidos']?>*" required />
            </div>
            <div className="input-style">
                <input type="text" name="email" value="" placeholder="<?=$txt['email']?>*" required />
            </div>
            <div className="input-style">
                <input type="text" name="telefono" value="" placeholder="<?=$txt['telefono']?>*" required />
            </div>
            <div className="input-style bg">
                <input type="text" name="mensaje" value="" placeholder="<?=$txt['mensaje']?>" />
            </div>
        </div><div className="submits">
            <div className="checkbox">
                <input type="checkbox" name="" value="" required />
                {/* <span><?=$txt['politica']?></a> </span> */}
            </div>
            <div className="submit">
                <input type="submit" name="" value="<?=$txt['enviar']?>" />
            </div>
        </div></>

)}
export default Formulario;