// ============================================
// pt-BR dictionary — Notes
// ============================================
// Filled by the "Notes" i18n work unit. Auto-loaded via static/app.js.
// Keys are the EXACT English source strings; values are the pt-BR translations.
// Shared labels (Delete, Save, Cancel, Pin, Unpin, Copy, etc.) resolve from
// shared-ui.pt-BR.js / memory-skills.pt-BR.js / tasks.pt-BR.js — not re-declared.
import { registerMessages } from '../i18n.js';

registerMessages('pt-BR', {
  // --- tour / first-open hint ---
  'is your basic todo list, and also where reminders are managed.': 'é sua lista de tarefas básica e também onde os lembretes são gerenciados.',
  'OK': 'OK',

  // --- pane header / toolbar ---
  'Minimize notes': 'Minimizar notas',
  'Toggle view': 'Alternar exibição',
  'Toggle': 'Alternar',
  'View archive': 'Ver arquivo',
  'Exit archive': 'Sair do arquivo',
  'Archive': 'Arquivar',
  'Grid': 'Grade',

  // --- search / select ---
  'Search notes…': 'Pesquisar notas…',
  'All caught up — no pending goal steps right now.': 'Tudo em dia — nenhum passo de objetivo pendente agora.',

  // --- label chips ---
  'Default': 'Padrão',
  'Show notes without tags': 'Mostrar notas sem tags',
  'Next step from every goal': 'Próximo passo de cada objetivo',
  'Today · one step per goal': 'Hoje · um passo por objetivo',
  'Show only goals': 'Mostrar só objetivos',
  'Goals': 'Objetivos',
  'Goal': 'Objetivo',
  'Reminders': 'Lembretes',
  'Click to filter reminders': 'Clique para filtrar lembretes',
  'Showing only reminders — click to show all': 'Mostrando só lembretes — clique para mostrar tudo',
  'Hiding reminders — click to show only reminders': 'Ocultando lembretes — clique para mostrar só lembretes',
  'Filter #{tag}': 'Filtrar #{tag}',

  // --- quick add ---
  'Take a note...': 'Anote algo...',
  'Add a note…': 'Adicionar uma nota…',
  'Add a to-do…': 'Adicionar uma tarefa…',
  'Title': 'Título',

  // --- empty states ---
  'No notes': 'Nenhuma nota',
  'No notes yet': 'Nenhuma nota ainda',
  'Note': 'Nota',

  // --- item / to-do ---
  'To-do': 'Tarefa',
  'Todo': 'Tarefa',
  'New item type': 'Novo tipo de item',
  'Item...': 'Item...',
  '+ Add item': '+ Adicionar item',
  '+ Add': '+ Adicionar',
  'Add text — click to cycle size': 'Adicionar texto — clique para alternar o tamanho',
  'Mark done': 'Marcar como concluído',
  'Mark step done': 'Marcar passo como concluído',
  'Delete item': 'Excluir item',
  'Edit item': 'Editar item',
  'Copy all items': 'Copiar todos os itens',
  'Copied {n} items': '{n} itens copiados',
  'Failed to add item': 'Falha ao adicionar item',
  'Failed to update item': 'Falha ao atualizar item',
  'Failed to remove item': 'Falha ao remover item',

  // --- agent integration ---
  'Agent: solve this': 'Agente: resolver isto',
  'Solve this todo with the agent': 'Resolver esta tarefa com o agente',
  'Run Agent': 'Executar Agente',
  'Re-run agent': 'Executar agente novamente',
  'Agent is working on this todo': 'O agente está trabalhando nesta tarefa',
  'Agent working in background — tap the Agent tag when ready': 'Agente trabalhando em segundo plano — toque na tag Agente quando estiver pronto',
  'Agent working on this item — tap the Agent tag when ready': 'Agente trabalhando neste item — toque na tag Agente quando estiver pronto',
  'Agent stream finished for this todo': 'Transmissão do agente finalizada para esta tarefa',
  'Agent failed: {err}': 'O agente falhou: {err}',
  'Could not create agent session': 'Não foi possível criar a sessão do agente',
  'No default chat model configured': 'Nenhum modelo de chat padrão configurado',
  'Nothing to solve — item is empty': 'Nada a resolver — o item está vazio',
  'Nothing to solve — note is empty': 'Nada a resolver — a nota está vazia',
  'AI-broken-down goal': 'Objetivo detalhado pela IA',

  // --- reminders ---
  'Remind me': 'Lembrar-me',
  'Remind me later': 'Lembrar-me mais tarde',
  'Edit reminder': 'Editar lembrete',
  'Note reminder': 'Lembrete de nota',
  'Pick date and time': 'Escolher data e hora',
  'Select date and time': 'Selecionar data e hora',
  'Pick week and weekday': 'Escolher semana e dia da semana',
  'Which one': 'Qual deles',
  'Nth weekday': 'Enésimo dia da semana',
  'Nth weekday of month': 'Enésimo dia da semana do mês',
  'Weekday': 'Dia da semana',
  'Day {n}': 'Dia {n}',
  'Day {n} every month': 'Dia {n} de cada mês',
  'Repeat': 'Repetir',
  "Doesn't repeat": 'Não repete',
  'Later today': 'Hoje, mais tarde',
  'Tomorrow': 'Amanhã',
  'Next week': 'Próxima semana',
  'Today, {time}': 'Hoje, {time}',
  'Tomorrow, {time}': 'Amanhã, {time}',
  '{date}, {time}': '{date}, {time}',
  'Daily': 'Diariamente',
  'Yearly': 'Anualmente',
  'Weekly on…': 'Semanalmente em…',
  'Weekly on {day}s': 'Semanalmente às {day}s',
  'Monthly on…': 'Mensalmente em…',
  'Monthly on day {n}': 'Mensalmente no dia {n}',
  'Monthly on last {day}': 'Mensalmente no último {day}',
  'Monthly on {a} {b}': 'Mensalmente no {a} {b}',
  'Last {day}': 'Último {day}',
  'Clear past': 'Limpar passados',
  'Clear photo (regular draw)': 'Limpar foto (desenho normal)',
  'Delete reminders whose time has passed': 'Excluir lembretes cujo horário já passou',
  'No past reminders to clear': 'Nenhum lembrete passado para limpar',
  'Cleared {n} past reminder(s)': '{n} lembrete(s) passado(s) limpo(s)',
  'Delete {n} past reminder(s)?': 'Excluir {n} lembrete(s) passado(s)?',
  'Save: {a} {b}': 'Salvar: {a} {b}',
  '{a} {b}': '{a} {b}',
  '{n}th': '{n}º',

  // --- card actions ---
  'Pin': 'Fixar',
  'Unarchive': 'Desarquivar',
  'Unarchive note': 'Desarquivar nota',
  'Save (archive)': 'Salvar (arquivar)',
  'Delete forever': 'Excluir definitivamente',
  'Delete permanently': 'Excluir permanentemente',
  'Delete this note?': 'Excluir esta nota?',
  'Delete {n} note(s)?': 'Excluir {n} nota(s)?',
  'More': 'Mais',
  'More actions': 'Mais ações',
  'Open': 'Abrir',
  'Update': 'Atualizar',
  'Restored unsaved changes': 'Alterações não salvas restauradas',
  'Restored unsaved note': 'Nota não salva restaurada',
  'Save failed: {err}': 'Falha ao salvar: {err}',
  'Image upload failed': 'Falha ao enviar imagem',
  'Attach photo': 'Anexar foto',
  'Tag(s) — space-separated': 'Tag(s) — separadas por espaço',

  // --- toasts / status ---
  'Archived': 'Arquivada',
  'Unarchived': 'Desarquivada',
  'Archived {n}': '{n} arquivada(s)',
  'Deleted': 'Excluída',
  'Failed to archive': 'Falha ao arquivar',
  'Failed to unarchive': 'Falha ao desarquivar',
  'Failed to pin': 'Falha ao fixar',
  'Failed to update color': 'Falha ao atualizar a cor',
  'Failed to save drawing': 'Falha ao salvar o desenho',

  // --- drawing tools ---
  'Draw': 'Desenhar',
  'Brush': 'Pincel',
  'Eraser': 'Borracha',
  'Line — click to cycle size': 'Linha — clique para alternar o tamanho',
  'Circle — click to cycle size': 'Círculo — clique para alternar o tamanho',
  'Drag': 'Arrastar',
  'Drag to reorder': 'Arraste para reordenar',
  'Stroke color': 'Cor do traço',
  'Stroke size': 'Tamanho do traço',

  // --- goal ---
  '(untitled goal)': '(objetivo sem título)',
  'Description (optional)': 'Descrição (opcional)',
  'type then Enter': 'digite e tecle Enter',

  // --- ordinals & weekdays (compose "2nd Tuesday") ---
  '1st': '1º',
  '2nd': '2º',
  '3rd': '3º',
  '4th': '4º',
  '5th': '5º',
  'Sunday': 'domingo',
  'Monday': 'segunda-feira',
  'Tuesday': 'terça-feira',
  'Wednesday': 'quarta-feira',
  'Thursday': 'quinta-feira',
  'Friday': 'sexta-feira',
  'Saturday': 'sábado',
});
