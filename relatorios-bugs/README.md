# 🐞 Relatório de Bugs: Instagram (Mobile)

## Bug 002: Corte de conteúdo em Stories (Aspect Ratio)
**Severidade:** Média (Prejudica o consumo de conteúdo)
**Prioridade:** Baixa

### Descrição
Em dispositivos com proporção de tela 20:9 (celulares mais longos), elementos de texto posicionados nas extremidades superiores ou inferiores dos Stories são cortados pela interface do app ou pelas bordas físicas do aparelho.

### Passos para Reproduzir
1. Abrir o Instagram em um dispositivo com tela longa (ex: Motorola Edge, linha Samsung A ou S).
2. Visualizar um Storie que possua texto ou stickers muito próximos ao topo.
3. Observar a área de recorte.

### Resultado Esperado
O aplicativo deve aplicar uma área de segurança (safe area) para garantir que o conteúdo do Storie seja redimensionado e fique totalmente visível, independente da proporção da tela.

### Resultado Atual
O texto é sobreposto pela barra de status do sistema ou cortado pela curvatura da tela, impedindo a leitura completa.

### Ambiente de Teste
- **Aparelho:** [Motorola G54]
- **Versão do Android:** [15]
- **Versão do App:** 417.0.0.54.77
- 
