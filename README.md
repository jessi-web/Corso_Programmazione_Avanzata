# Corso Programmazione Avanzata

## Le seguenti librerie e framework sono stati utilizzati per il back-end:
    • Node.JS
    • Express
    • Sequelize
    • MySQL
    • JWT
    • Docker
    • Postman
    • MySQL
    • js-chess-engine  

## Descrizione del progetto:

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.


```dart
import 'package:flutter/material.dart';
import 'package:code_text_field/code_text_field.dart';
// Import the language & theme
import 'package:highlight/languages/dart.dart';
import 'package:flutter_highlight/themes/monokai-sublime.dart';

class CodeEditor extends StatefulWidget {
  @override
  _CodeEditorState createState() => _CodeEditorState();
}

class _CodeEditorState extends State<CodeEditor> {
  CodeController? _codeController;

  @override
  void initState() {
    super.initState();
    final source = "void main() {\n    print(\"Hello, world!\");\n}";
    // Instantiate the CodeController
    _codeController = CodeController(
      text: source,
      language: dart,
    );
  }

  @override
  void dispose() {
    _codeController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return CodeTheme(
      data: const CodeThemeData(styles: monokaiSublimeTheme),
      child: CodeField(
        controller: _codeController!,
        textStyle: const TextStyle(fontFamily: 'SourceCode'),
      ),
    );
  }
}
```

