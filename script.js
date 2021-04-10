alert ("Escolha uma evolução para o Eevee");
var operacao = prompt(
  "Digite 1 usar Water Stone, 2 para usar Thunder Stone, 3 para usar Fire Stone"
);

if (operacao == 1) {
  document.write(
     '<h4><img src="https://cdn.bulbagarden.net/upload/3/3f/Bag_Water_Stone_Sprite.png" alt=""</h4>') 
    document.write('<h3><img src="https://cdn.bulbagarden.net/upload/thumb/f/fd/134Vaporeon.png/96px-134Vaporeon.png" alt=""</h3>')
    alert("Eevee evoluiu para Valporeon!"
  );
}
else if (operacao == 2) {
  document.write(
     '<h4><img src="https://cdn.bulbagarden.net/upload/7/79/Bag_Thunder_Stone_Sprite.png" alt=""</h4>') 
   document.write('<h3><img src="https://cdn.bulbagarden.net/upload/thumb/b/bb/135Jolteon.png/96px-135Jolteon.png" alt=""</h3>')
   alert ("Eevee evoluiu para Jolteon!"
  );
}
 else if (operacao == 3) {
  document.write(
     '<h4><img src="https://cdn.bulbagarden.net/upload/8/86/Bag_Fire_Stone_Sprite.png" alt=""</h4>') 
    document.write('<h3><img src="https://cdn.bulbagarden.net/upload/thumb/d/dd/136Flareon.png/96px-136Flareon.png" alt=""</h3>')
    alert ("Eevee evoluiu para Flareon!"
  );
 }
  